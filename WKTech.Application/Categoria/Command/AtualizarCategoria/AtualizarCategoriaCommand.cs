using MediatR;
using System;

namespace WKTech.Application.Categoria.Command.AtualizarCategoria
{
    public class AtualizarCategoriaCommand : IRequest<bool>
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
    }
}
