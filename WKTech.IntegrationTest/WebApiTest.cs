using System.Net;
using System.Security.Policy;
using System.Text;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using WKTech.API;

namespace WKTech.IntegrationTest;

public class WebApiTest : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public WebApiTest(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Theory]
    [InlineData("/hc")]
    public async Task Get_Endpoint_Return_Success_HealthCheck(string url)
    {
        var client = _factory.CreateClient();
        var response = await client.GetAsync(url);
        var content = await response.Content.ReadAsStringAsync();
        response.EnsureSuccessStatusCode();
        Assert.Equal("Online", content);
    }


    [Theory]
    [InlineData("/categoria")]
    public async Task Post_Endpoint_ReturnSuccess_For_Correct_SaveDataObject(string url)
    {
        var client = _factory.CreateClient();
        //{"nome": "string"}
        var data = JsonConvert.SerializeObject(new { nome = "Mercado" });
        using var content = new StringContent(data, Encoding.UTF8, "application/json");
        using var response = await client.PostAsync(url, content);

        Assert.True(response.IsSuccessStatusCode);
    }


    [Theory]
    [InlineData("/categoria/nome/Mercado")]
    public async Task Get_Endpoint_ReturnSuccess_For_Correct_QueryObject(string url)
    {
       var client = _factory.CreateClient();
       var response = await client.GetAsync($"{url}");
       var jsonReturn = await response.Content.ReadAsStringAsync();
       var resultModel = JsonConvert.DeserializeObject(jsonReturn);

        Assert.True(response.IsSuccessStatusCode);
    }


}
