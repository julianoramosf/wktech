using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace WKTech.Application.Categoria.Query.ObterCategoria
{
    public class ObterCategoriaQuery : IRequest<ObterCategoriaViewModel>
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
    }
}
