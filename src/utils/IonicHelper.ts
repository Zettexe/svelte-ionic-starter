import type { SvelteComponent } from "svelte/internal";
import {
  loadingController,
  toastController,
  alertController,
  pickerController,
  actionSheetController,
  modalController,
  popoverController,
} from "@ionic/core";
import type {
  MenuI,
  ComponentProps,
  LoadingOptions,
  ToastOptions,
  AlertOptions,
  PickerOptions,
  ActionSheetOptions,
} from "@ionic/core";

export const getIonicNav = () => {
  return document.querySelector("ion-nav");
};

export const getIonicMenu = (menuId: string): MenuI => {
  return document.querySelector(
    `ion-menu[menu-id='${menuId}']`
  ) as unknown as MenuI;
};

//Unused component variable to force component import at function call
export const IonicShowModal = async (
  selector: string,
  component: new (...args: any) => SvelteComponent,
  componentProps: ComponentProps
) => {
  const modal = await modalController.create({
    component: selector,
    componentProps,
  });
  modal.present();
  return await modal.onWillDismiss();
};

//Unused component variable to force component import at function call
export const IonicShowPopover = async (
  selector: string,
  component: new (...args: any) => SvelteComponent,
  componentProps: ComponentProps
) => {
  const popover = await popoverController.create({
    component: selector,
    event,
    componentProps,
  });
  popover.present();
  return await popover.onWillDismiss();
};

export const IonicShowLoading = async (options: LoadingOptions) => {
  const ionicitem = await loadingController.create(options);
  ionicitem.present();
  return ionicitem;
};

export const IonicShowToast = async (options: ToastOptions) => {
  const toast = await toastController.create(options);
  toast.present();
  return toast;
};

export const IonicShowAlert = async (options: AlertOptions) => {
  const alert = await alertController.create(options);
  alert.present();
  return alert;
};

export const IonicShowPicker = async (options: PickerOptions) => {
  const picker = await pickerController.create(options);
  picker.present();
  return picker;
};

export const IonicShowActionSheet = async (options: ActionSheetOptions) => {
  const actionSheet = await actionSheetController.create(options);
  actionSheet.present();
  return actionSheet;
};
