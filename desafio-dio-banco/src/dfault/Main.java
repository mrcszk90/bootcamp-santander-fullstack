package dfault;

public class Main {
	public static void main (String[] args) {
		
		cliente marcio = new cliente();
		marcio.setNome("Marcio");
		
		conta cc = new contaCorrente(marcio);
		conta poupanca = new contaPoupanca(marcio);
		
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
		
		System.out.println("Esses é o nosso principal cliente: " + marcio.getNome());
		

		
}	
}

