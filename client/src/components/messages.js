import Swal from 'sweetalert2'

export const successMessage = (title, message) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
}

export const errorMessage = (error) => {
    const errorArray = error.response.data;
    let errorMessage = ''
    try {
        for (const field in errorArray) {
            if (errorArray.hasOwnProperty(field)) {
                errorMessage += `${field}: ${errorArray[field].join(', ')}\n`;
            }
        }
    } catch (error) {
        errorMessage = errorArray.detail
    }
    return Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}


export const confirmMessage = (title, message, confirmButtonText, cancelButtonText, callback, secondaryCallback) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            callback()
        }
        else {
            secondaryCallback() | null
        }

    })
}

export const infoMessage = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'info',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
}

export const questionMessageForPreventLogout = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        confirmButtonText: "Estoy Aquí",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: 8000,
        timerProgressBar: true,
    }).then((result) => {
        return result.isConfirmed
    })
}