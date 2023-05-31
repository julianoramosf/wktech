using MediatR;
using Microsoft.AspNetCore.Mvc;
using WKTech.Application.Produto.Command.AtualizarProduto;
using WKTech.Application.Produto.Command.RegistrarProduto;
using WKTech.Application.Produto.Query.ObterProduto;
using System;

namespace WKTech.API.Produto
{
    public class HealthCheckController : ControllerBase
    {
        public HealthCheckController()
        {
        }

        [HttpGet, Route("hc")]
        public IActionResult Get()
        {
            return Ok("Online");
        }

    }
}
