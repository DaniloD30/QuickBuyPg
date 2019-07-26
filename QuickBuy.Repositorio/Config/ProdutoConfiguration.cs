using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(u => u.Id);

            ///Builder utiliza o padrão Fluent
            //builder.Property(u => u.Email).IsRequired().HasMaxLength(50);
            //builder.Property(u => u.Senha).IsRequired().HasMaxLength(400);
            builder.Property(u => u.Preco).IsRequired();
            builder.Property(u => u.Descricao).IsRequired().HasMaxLength(400);
            //builder.Property(u => u.Pedidos).IsRequired().HasMaxLength(400);

            builder.Property(u => u.Nome)
                .HasMaxLength(50);
        }
    }
}
