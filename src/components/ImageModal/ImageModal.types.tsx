import { Dispatch, SetStateAction } from 'react';

export type ImageModalProps = {
  modalUrl: string;
  setModal: Dispatch<SetStateAction<string>>;
};
