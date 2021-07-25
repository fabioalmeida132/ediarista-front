import { useState, useMemo }from 'react';
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService} from "data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      ValidationService.cep(cep);
    },[cep]),
    [erro,setErro] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas,setDiariastas] = useState([] as UserShortInterface[]),
    [diaristasRestantes,setDiariastasRestantes] = useState(0)
  ;

  return{
    cep, setCep,cepValido
  }

}