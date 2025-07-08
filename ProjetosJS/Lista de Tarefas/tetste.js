

async function verificarStatus() {
    try {
        const status = await new Promise((resolve, reject) => {
            // Simulando uma operação assíncrona bem-sucedida
            resolve('Online');
        });
        console.log(status);
    } catch (erro) {
        console.error(erro);
    }
}

verificarStatus();