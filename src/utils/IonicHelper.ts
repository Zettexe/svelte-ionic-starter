import {
    MenuI,
    loadingController,
    toastController,
    alertController,
    pickerController,
    actionSheetController,
    modalController,
    popoverController
} from "@ionic/core";

export const getIonicNav = () => {
    return document.querySelector("ion-nav");
}

export const getIonicMenu = (menuId):MenuI => {
    const query = "ion-menu[menu-id='" + menuId + "']";
    return document.querySelector(query) as unknown as MenuI;
}

export const IonicShowModal = (selector, componentProps):any => {
    return modalController
        .create({
            component: selector,
            componentProps
        })
        .then(modal => {
            modal.present();
            return modal.onWillDismiss()
        });
}


export const IonicShowPopover = (event, selector, component, componentProps):any => {
    return popoverController
        .create({
            component: selector,
            event,
            componentProps
        })
        .then(popover => {
            popover.present();
            return popover.onWillDismiss();
        });
};

export const IonicShowLoading = (options) => {
    return loadingController
        .create(options)
        .then(ionicitem => {
            ionicitem.present()
            return ionicitem;
        })
}

export const IonicShowToast = (options) => {
    return toastController.create(options).then(toast => {
        toast.present();
        return toast;
    })
}

export const IonicShowAlert = (options) => {
    return alertController.create(options).then(alert => {
        alert.present();
        return alert;
    })
}

export const IonicShowPicker = (options) => {
    return pickerController.create(options).then(picker => {
        picker.present();
        return picker;
    })
}

export const IonicShowActionSheet = (options) => {
    return actionSheetController.create(options).then(actionSheet => {
        actionSheet.present();
        return actionSheet;
    })
}