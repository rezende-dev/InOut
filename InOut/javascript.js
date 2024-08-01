document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const minLengthItem = document.getElementById('min-length');
    const uppercaseItem = document.getElementById('uppercase');
    const numberItem = document.getElementById('number');

    function validatePassword() {
        const password = passwordInput.value;
        const hasMinLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        // Atualiza o estado do item de comprimento
        if (hasMinLength) {
            minLengthItem.classList.add('valid');
            minLengthItem.classList.remove('invalid');
        } else {
            minLengthItem.classList.add('invalid');
            minLengthItem.classList.remove('valid');
        }

        // Atualiza o estado do item de maiúscula
        if (hasUppercase) {
            uppercaseItem.classList.add('valid');
            uppercaseItem.classList.remove('invalid');
        } else {
            uppercaseItem.classList.add('invalid');
            uppercaseItem.classList.remove('valid');
        }

        // Atualiza o estado do item de número
        if (hasNumber) {
            numberItem.classList.add('valid');
            numberItem.classList.remove('invalid');
        } else {
            numberItem.classList.add('invalid');
            numberItem.classList.remove('valid');
        }
    }

    passwordInput.addEventListener('input', validatePassword);
});
function toggleDarkTheme() {
    const body = document.body;

    // Verifica se o tema escuro já está aplicado
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        // Opcional: Remova o tema escuro do armazenamento local
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        // Opcional: Salve a preferência do tema no armazenamento local
        localStorage.setItem('theme', 'dark');
    }
}

// Função para aplicar o tema baseado na preferência salva
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Chama a função para aplicar o tema salvo ao carregar a página
applySavedTheme();

function applyDarkModeBasedOnSystemPreference() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (darkModeMediaQuery.matches) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Aplica o tema baseado na preferência do sistema ao carregar a página
applyDarkModeBasedOnSystemPreference();
function populateCities() {
    var stateSelect = document.getElementById('state');
    var citySelect = document.getElementById('city');

    // Limpa as opções atuais de cidades
    citySelect.innerHTML = '';

    // Obtém o valor selecionado do estado
    var state = stateSelect.value;

    // Define as cidades correspondentes ao estado selecionado
    var cities = [];
    switch (state) {
        case 'SP':
            cities = ['São Paulo', 'Campinas', 'Santo André'];
            break;
        case 'RJ':
            cities = ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'];
            break;
        case 'MG':
            cities = ['Belo Horizonte', 'Contagem', 'Uberlândia'];
            break;
        case 'ES':
            cities = ['Vitória', 'Vila Velha', 'Cariacica'];
            break;
        default:
            break;
    }

    // Preenche o select de cidades com as novas opções
    cities.forEach(function (city) {
        var option = document.createElement('option');
        option.textContent = city;
        citySelect.appendChild(option);
    });

    // Habilita o select de cidades se há cidades disponíveis
    citySelect.disabled = cities.length === 0;
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio automático do formulário
    var age = document.getElementById('age').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');
    var isValid = true;

    // Limpa mensagens de erro e sucesso anteriores
    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Validação da idade
    if (age < 18) {
        errorMessage.textContent = 'Você deve ter pelo menos 18 anos para preencher este formulário.';
        isValid = false;
    }

    // Validação do estado e cidade
    if (state === '' || city === '') {
        errorMessage.textContent = 'Por favor, selecione um estado e uma cidade.';
        isValid = false;
    }

    // Se todas as validações passarem, exibe mensagem de sucesso
    if (isValid) {
        successMessage.textContent = 'Formulário enviado com sucesso!';
        // Aqui você pode adicionar o código para enviar os dados para o servidor, se necessário
        // Exemplo: enviarFormulario();
    }
});
document.addEventListener('DOMContentLoaded',
    () => {
        const form = document.getElementById('form');
        const cepInput = document.getElementById('cep'); const cnpjInput = document.getElementById('cnpj');
        const cepError = document.getElementById('cep-error'); const cnpjError = document.getElementById('cnpj-error');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const cepValue = cepInput.value.replace(/\D/g, '');
            const cnpjValue = cnpjInput.value.replace(/\D/g, '');

            let isValid = true;

            // Validar CEP
            if (cepValue.length !== 8) {
                cepError.textContent = 'CEP deve ter 8 dígitos.';
                isValid = false;
            } else {
                cepError.textContent = '';
            }

            // Validar CNPJ
            if (cnpjValue.length !== 14) {
                cnpjError.textContent = 'CNPJ deve ter 14 dígitos.';
                isValid = false;
            } else {
                cnpjError.textContent = '';
            }

            if (isValid) {
                alert('Dados validados com sucesso!');
            }
        });

        // Adiciona formatação ao CEP e CNPJ conforme o usuário digita
        cepInput.addEventListener('input', () => {
            cepInput.value = cepInput.value
                .replace(/\D/g, '')
                .replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
        });

        cnpjInput.addEventListener('input', () => {
            cnpjInput.value = cnpjInput.value
                .replace(/\D/g, '')
                .replace(/^(\d{2})(\d{0,3})(\d{0,3})(\d{0,4})/, '$1.$2.$3/$4-')
                .trim();
        });
    });
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cpfValue = cpfInput.value.replace(/\D/g, '');

    if (!isValidCPF(cpfValue)) {
        cpfError.textContent = 'CPF inválido.';
    } else {
        cpfError.textContent = '';
        alert('CPF válido!');
    }
});

// Adiciona formatação ao CPF conforme o usuário digita
cpfInput.addEventListener('input', () => {
    cpfInput.value = cpfInput.value
        .replace(/\D/g, '')
        .replace(/^(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4')
        .trim();
});

document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const form = document.getElementById('cpf-form');
    function isValidCPF(cpf) {
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        return remainder === parseInt(cpf.charAt(10));
    }
});