
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace  QuickBuy.Web.ModelPgAdmin
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options): base(options)
        {

        }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Produto> Produto{get;set;}
    }
}