using MediatR;
using System;

namespace WKTech.Application.Categoria.Command.RegistrarCategoria
{
    public class RegistrarCategoriaCommand : IRequest<bool>
    {
        public string Nome { get; set; }
      
    }
}
