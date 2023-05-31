using System;
using System.Collections.Generic;
using System.Text;

namespace WKTech.Infra.Data.UoW
{
    public interface IUnitOfWork : IDisposable
    {
        bool Commit();
    }
}
