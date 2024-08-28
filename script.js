document.addEventListener('DOMContentLoaded', () => {
    // Função de criptografia usando substituição de caracteres
    function encryptText(text) {
        const replacements = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        return text.split('').map(char => {
            // Substitui cada caractere com base no mapeamento definido
            return replacements[char] || char;
        }).join('');
    }

    // Função de descriptografia revertendo as substituições
    function decryptText(text) {
        const replacements = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        // Cria uma expressão regular para encontrar as palavras de substituição
        const regex = new RegExp(Object.keys(replacements).join('|'), 'g');

        return text.replace(regex, matched => replacements[matched]);
    }

    // Manipulador de clique para o botão de criptografia
    document.querySelector('.encriptar').addEventListener('click', () => {
        const textElement = document.querySelector('.texto1');
        if (!textElement) {
            console.error('Text area with class "texto1" not found');
            return;
        }

        const text = textElement.value;
        const encryptedText = encryptText(text);
        document.querySelector('.texto2').value = encryptedText;
    });

    // Manipulador de clique para o botão de descriptografia
    document.querySelector('.desencriptar').addEventListener('click', () => {
        const textElement = document.querySelector('.texto1');
        if (!textElement) {
            console.error('Text area with class "texto1" not found');
            return;
        }

        const text = textElement.value;
        const decryptedText = decryptText(text);
        document.querySelector('.texto2').value = decryptedText;
    });
});
