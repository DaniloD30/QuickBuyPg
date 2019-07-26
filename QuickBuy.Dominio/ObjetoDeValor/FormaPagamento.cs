using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.ObjetoDeValor
{
    public class FormaPagamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public bool EhBoleto { get { return Id == (int)TipoPagamentoEnum.Boleto; }  }
        public bool EhCartao { get { return Id == (int)TipoPagamentoEnum.CartaoCredito; } }
        public bool EhDeposito { get { return Id == (int)TipoPagamentoEnum.Deposito; } }
        public bool NaoFoiDefinido { get { return Id == (int)TipoPagamentoEnum.NaoDefinido; } }



    }
}
