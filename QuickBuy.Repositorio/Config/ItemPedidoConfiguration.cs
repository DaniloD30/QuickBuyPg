using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(u => u.Id);
           builder.Property(u => u.ProdutoId).IsRequired().HasMaxLength(50);
            builder.Property(u => u.Quantidade).IsRequired().HasMaxLength(50);
            
        }
    }
}
