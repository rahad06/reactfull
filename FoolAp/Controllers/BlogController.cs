using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public BlogController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        [HttpPost]
        public async Task<ActionResult<BlogPost>> CreateBlogPost([FromQuery] string language, BlogPost newBlogPost)
        {
            // Set the language of the new blog post
            newBlogPost.Language = language;

            // Add the new blog post to the database
            _dbContext.BlogPosts.Add(newBlogPost);
            await _dbContext.SaveChangesAsync();

            // Return the newly created blog post
            return CreatedAtAction(nameof(GetBlogPostById), new { id = newBlogPost.Id, language = newBlogPost.Language }, newBlogPost);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetAllBlogPosts([FromQuery] string language = "en")
        {
            // Get all blog posts based on language
            // Get all blog posts based on language
            var blogPosts = await _dbContext.BlogPosts
                .Where(bp => bp.Language == language)
                .ToListAsync();


            if (!blogPosts.Any())
            {
                return NotFound($"No blog posts found for the specified language ({language})");
            }

            return Ok(blogPosts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> GetBlogPostById(int id, [FromQuery] string language = "en")
        {
            // Get blog post based on ID and language
            var blogPost = await _dbContext.BlogPosts
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (blogPost == null)
            {
                return NotFound($"No blog post found for the specified ID ({id}) and language ({language})");
            }

            return Ok(blogPost);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<BlogPost>> UpdateBlogPost(int id, [FromQuery] string language, BlogPost updatedBlogPost)
        {
            // Get blog post based on ID and language
            var blogPost = await _dbContext.BlogPosts
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (blogPost == null)
            {
                return NotFound($"No blog post found for the specified ID and language ({language})");
            }

            // Update the blog post
            blogPost.Title = updatedBlogPost.Title;
            blogPost.Content = updatedBlogPost.Content;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound($"No blog post found for the specified ID ({id}) and language ({language})");
                }
                else
                {
                    throw;
                }
            }

            return Ok(blogPost);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<BlogPost>> DeleteBlogPost(int id, [FromQuery] string language = "en")
        {
            // Get blog post based on ID and language
            var blogPost = await _dbContext.BlogPosts
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (blogPost == null)
            {
                return NotFound($"No blog post found for the specified ID ({id}) and language ({language})");
            }

            _dbContext.BlogPosts.Remove(blogPost);
            await _dbContext.SaveChangesAsync();

            return Ok(blogPost);
        }

        private bool BlogPostExists(int id)
        {
            return _dbContext.BlogPosts.Any(b => b.Id == id);
        }
    }
}
