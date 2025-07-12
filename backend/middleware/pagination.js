/**
 * Pagination middleware
 * Extracts pagination parameters from the request query
 * and adds a paginate method to the response object
 */
const paginationMiddleware = (req, res, next) => {
  // Extract pagination parameters from query
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Add pagination parameters to request
  req.pagination = {
    page,
    limit,
    skip
  };

  // Add paginate method to response
  res.paginate = async (model, query = {}, options = {}) => {
    try {
      // Count total documents
      const total = await model.countDocuments(query);
      
      // Get paginated results
      let results = model.find(query)
        .skip(skip)
        .limit(limit);
      
      // Apply population if specified
      if (options.populate) {
        if (Array.isArray(options.populate)) {
          options.populate.forEach(field => {
            results = results.populate(field);
          });
        } else {
          results = results.populate(options.populate);
        }
      }
      
      // Apply sorting if specified
      if (options.sort) {
        results = results.sort(options.sort);
      } else {
        results = results.sort({ createdAt: -1 }); // Default sort by creation date
      }
      
      // Execute query
      results = await results;
      
      // Calculate pagination metadata
      const totalPages = Math.ceil(total / limit);
      const hasNextPage = page < totalPages;
      const hasPrevPage = page > 1;
      
      // Return paginated response
      return {
        results,
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage,
          hasPrevPage,
          nextPage: hasNextPage ? page + 1 : null,
          prevPage: hasPrevPage ? page - 1 : null
        }
      };
    } catch (error) {
      throw error;
    }
  };
  
  next();
};

module.exports = paginationMiddleware;
