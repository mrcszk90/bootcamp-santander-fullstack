package dfault;

import java.util.List;

public class banco {
	
	private String nome;

	private List<conta> contas;
	
	public List<conta> getContas() {
		return contas;
		}

	public void setContas(List<conta> contas) {
		this.contas = contas;
	}

	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	

}
