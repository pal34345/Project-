using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssistantController : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] PromptRequest request)
    {
        // TODO: Integrate Azure OpenAI here
        var reply = $"AI Response to: {request.Prompt}";
        return Ok(new { reply });
    }
}

public class PromptRequest
{
    public string Prompt { get; set; }
}