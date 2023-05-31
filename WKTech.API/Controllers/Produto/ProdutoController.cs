using MediatR;
using Microsoft.AspNetCore.Mvc;
using WKTech.Application.Produto.Command.AtualizarProduto;
using WKTech.Application.Produto.Command.RegistrarProduto;
using WKTech.Application.Produto.Query.ObterProduto;
using System;
using WKTech.Application.Produto.Command.ApagarProduto;

namespace WKTech.API.Produto
{
    public class ProdutoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProdutoController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        [HttpGet, Route("produto/{id}")]
        public IActionResult Obter(Guid id)
        {
            var query = new ObterProdutoQuery() { Id = id };
            var produtoViewModel = _mediator.Send(query);
            return Ok(produtoViewModel);
        }

        [HttpGet, Route("produto")]
        public IActionResult ObterTodos()
        {
            var query = new ObterTodosQuery();
            var produtoViewModel = _mediator.Send(query);
            return Ok(produtoViewModel);
        }

        [HttpPost, Route("produto")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult CadastrarProduto([FromBody] RegistrarProdutoCommand registrarProdutoCommand)
        {
            _mediator.Send(registrarProdutoCommand);
            return StatusCode(201);
        }

        [HttpPut, Route("produto")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult AtualizarPreco([FromBody] AtualizarProdutoCommand atualizarPrecoCommand)
        {
             _mediator.Send(atualizarPrecoCommand);
            return Ok();

        }

        [HttpDelete, Route("produto")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult ApagarProduto([FromBody] ApagarProdutoCommand command)
        {
            _mediator.Send(command);
            return Ok();

        }
    }
}
