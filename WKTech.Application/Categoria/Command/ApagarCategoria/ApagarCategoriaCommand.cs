using MediatR;
using System;

namespace WKTech.Application.Categoria.Command.ApagarCategoria
{
    public class ApagarCategoriaCommand : IRequest<bool>
    {
        public Guid Id { get; set; }

    }
}
