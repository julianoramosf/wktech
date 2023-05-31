using MediatR;
using Microsoft.AspNetCore.Mvc;
using WKTech.Application.Categoria.Command.AtualizarCategoria;
using WKTech.Application.Categoria.Command.RegistrarCategoria;
using WKTech.Application.Categoria.Command.ApagarCategoria;
using WKTech.Application.Categoria.Query.ObterCategoria;
using System;

namespace WKTech.API.categoria
{
    public class CategoriaController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoriaController(IMediator mediator)
        {
            this._mediator = mediator;
        }
      

        [HttpGet, Route("categoria/{id}")]
        public IActionResult Obter(Guid id)
        {
            var query = new ObterCategoriaQuery() { Id = id };
            var categoriaViewModel = _mediator.Send(query);
            return Ok(categoriaViewModel);
        }

        [HttpGet, Route("categoria/nome/{nome}")]
        public IActionResult Obter(string nome)
        {
            var query = new ObterCategoriaQuery() { Nome = nome };
            var categoriaViewModel = _mediator.Send(query);
            return Ok(categoriaViewModel);
        }

        [HttpGet, Route("categoria")]
        public IActionResult ObterTodas()
        {
            var query = new ObterTodasQuery();
            var categoriaViewModel = _mediator.Send(query);
            return Ok(categoriaViewModel);
        }

        [HttpPost, Route("categoria")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult CadastrarCategoria([FromBody] RegistrarCategoriaCommand command)
        {
            _mediator.Send(command);
            return StatusCode(201);
        }

        [HttpPut, Route("categoria")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult AtualizarCategoria([FromBody] AtualizarCategoriaCommand command)
        {
            _mediator.Send(command);
            return Ok();

        }

        [HttpDelete, Route("categoria")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public IActionResult ApagarCategoria([FromBody] ApagarCategoriaCommand command)
        {
            _mediator.Send(command);
            return Ok();

        }
    }
}
