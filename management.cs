using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ManagementController : ControllerBase
{
    [HttpGet("analytics")]
    public IActionResult GetAnalytics()
    {
        // TODO: Pull from Azure SQL + Knowledge Repo
        return Ok(new { productivity = 94, auditPassRate = 91, ideasReceived = 4 });
    }
}