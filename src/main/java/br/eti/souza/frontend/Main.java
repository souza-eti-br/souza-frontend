package br.eti.souza.frontend;

import br.eti.souza.server.Server;

public class Main {

    public static void main(String[] args) {
        //Server.setStaticResource("web");
        Server.setStaticResource("/home/souza/Projetos/souza-frontend/src/main/resources/web");
        Server.start();
    }
}
