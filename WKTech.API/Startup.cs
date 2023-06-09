using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using WKTech.Application.Produto;
using WKTech.Domain.CategoriaAggregate;
using WKTech.Domain.ProdutoAggregate;
using WKTech.Infra.Data;
using WKTech.Infra.Data.Categoria;
using WKTech.Infra.Data.Produto;
using WKTech.Infra.Data.UoW;
using System;

namespace WKTech.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static readonly ILoggerFactory loggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            var assembly = AppDomain.CurrentDomain.Load("WKTech.Application");
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(assembly));
            services.AddAutoMapper(assembly);

            services.AddCors(options =>
                 {
                     options.AddPolicy("CorsPolicy",
           builder => builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());
                 });


            services.AddScoped<IProdutoRepository, ProdutoRepository>();
            services.AddScoped<ICategoriaRepository, CategoriaRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddDbContext<WKTechContext>(options =>
                //.UseLoggerFactory(loggerFactory)
                options.UseMySql(
                    Configuration.GetConnectionString("DefaultConnection"),new MySqlServerVersion(new Version(8, 0, 11)), 
                    o=> o.MigrationsAssembly("WKTech.API"))
            );

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WK Technology", Version = "v1" });
            });          

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("CorsPolicy");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

           

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "WK Technology V1");
            });
        }
    }
}
