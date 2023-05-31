using System;

namespace WKTech.Infra.Data.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WKTechContext sistemaDeComprasContexto;

        public UnitOfWork(WKTechContext context)
        {
            sistemaDeComprasContexto = context;
        }

        public bool Commit()
        {
            return sistemaDeComprasContexto.SaveChanges() > 0;
        }

        public void Dispose()
        {
            sistemaDeComprasContexto.Dispose();
        }
    }
}
