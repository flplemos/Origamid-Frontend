public void imprimeArvore() {
    imprimeComRecuo(this.raiz, 0);
}

private void imprimeComRecuo(No atual, int nivel) {
    if (atual == null) {
        return;
    }

    // Gera espaços de acordo com o nível do nó
    String recuo = " ".repeat(nivel * 2);

    // Imprime o id do nó com o recuo apropriado
    System.out.println(recuo + atual.getId());

    // Recursão para os filhos esquerdo e direito com aumento no nível
    imprimeComRecuo(atual.getEsq(), nivel + 1);
    imprimeComRecuo(atual.getDir(), nivel + 1);
}