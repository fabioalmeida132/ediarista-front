import Safe from 'ui/components/feedback/Safe/Safe'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from "@material-ui/core";
import {FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer} from "@styles/pages/index.style";
import useIndex from "../data/hooks/pages/useIndex.page";


export default function Home() {

  const { cep, setCep }= useIndex();

  return (
      <div>
        <Safe/>
        <PageTitle
            title={'Conheça os profissionais'}
            subtitle={'Preencha seu endereço e veja todos os profissionais da sua região.'}
        />
        <Container>
          <FormElementsContainer>
            <TextFieldMask
              mask={'99.999-999'}
              label={'Digite seu CEP'}
              fullWidth
              variant={'outlined'}
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />
            <Typography color={'error'}>Cep Inválido</Typography>
            <Button variant={'contained'}  sx={{width: '220px'}}>Buscar</Button>
          </FormElementsContainer>
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
              <UserInformation
                name={'Fábio'}
                picture={'https://github.com/filipedeschamps.png'}
                rating={4}
                description={'Sorocaba'}
              />
            </ProfissionaisContainer>
          </ProfissionaisPaper>
        </Container>

      </div>
  )
}
