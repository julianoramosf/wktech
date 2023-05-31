using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace WKTech.Application.Produto.Query.ObterProduto
{
    public class ObterProdutoQuery : IRequest<ObterProdutoViewModel>
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
    }
}
