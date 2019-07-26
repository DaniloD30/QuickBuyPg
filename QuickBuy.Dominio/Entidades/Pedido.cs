using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }
        /// API de Frete
        /// <summary>
        /// Pedidos deve ter pelo menos um  item de pedido
        /// ou muitos itens pedidos
        /// </summary>
        public virtual ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if (!ItensPedido.Any())
            {
               AdicionarCritica("Warning : Item de Pedido não pode ficar vazio");
            }
            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Warning : O CEP Nao pode estar vazio");

            if (FormaPagamentoId == 0)
                AdicionarCritica("Warning - Nao foi informado forma de pagamento");

        }
    }
}
