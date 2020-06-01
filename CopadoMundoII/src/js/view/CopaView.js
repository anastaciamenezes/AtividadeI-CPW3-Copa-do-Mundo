import CopaController from '../controller/CopaController';

export default class CopaView {

    constructor() {
        this.copaController = new CopaController();
    }

    renderizarTabelaDeTimes() {
        let times = this.copaController.recuperarTimes();

        let cabecalho = this.criarCabecalhoDaTabelaDeTimes();

        let corpo = this.criarCorpoDaTabelaDeTimes(times);

        let tabela = `<table>${cabecalho}${corpo}</table>`;

        /**
         * tabela.insertAdjacentHTML('beforeend', cabecalho);
         * tabela.insertAdjacentHTML('beforeend', corpo);
         */
        document.getElementById('visualizacaoTimes').innerHTML = tabela;
    }

    criarCabecalhoDaTabelaDeTimes() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Ano</th>
                    <th>Campeao</th>
                    <th>ViceCampeao</th>
                    <th>Tecnico</th>
                </tr>
            </thead>            
        `;

        return cabecalho;

    }
    criarCorpoDaTabelaDeTimes(times) {
        let corpo = '';
        times.forEach(time => {
            let timeStr = `
                <tr>
                    <td>${time.ano}</td>
                    <td>${time.campeao}</td>
                    <td>${time.vicecampeao}</td>
                    <td>${time.tecnico}</td>
                </tr>    
            `;

            corpo += timeStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}