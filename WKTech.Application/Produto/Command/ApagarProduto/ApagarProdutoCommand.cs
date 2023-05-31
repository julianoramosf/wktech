using MediatR;
using System;

namespace WKTech.Application.Produto.Command.ApagarProduto
{
    public class ApagarProdutoCommand : IRequest<bool>
    {
        public Guid Id { get; set; }
    }
}
