function form  ()  {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
 
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            document.querySelector('.status').textContent = message.loading;

            const formData = new FormData(item);

            if(item.classList.contains("popup_form--calc")) {
                for (let key in modalDate)  {
                    formData.append(key, modalDate[key]);
                }
            }

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: object
            }).then(data => {
                statusMessage.textContent = message.success;
            }).catch(() => {
                statusMessage.textContent = message.failure;
            }).finally(() => {
                    console.log(object);
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });



}

form();