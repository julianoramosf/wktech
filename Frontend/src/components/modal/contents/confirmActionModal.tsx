import { FC } from 'react'
import { ContentModalContainer } from '../style'
import { Button } from '../../form/button'
import { IContentConfirmActionModalComponent } from '../../../utils/interfaces/components/modal'
import { Loading } from '../../loading/loading'

const ContentConfirmActionModal: FC<IContentConfirmActionModalComponent> = ({
  description,
  onClickAction,
  onClickCloseModal,
  small,
  isLoading,
}) => {
  return (
    <ContentModalContainer>
      <span dangerouslySetInnerHTML={{ __html: description }}></span>
      <small dangerouslySetInnerHTML={{ __html: small }}></small>

      <div>
        <Button
          background={'#28C76F'}
          title={
            isLoading ? <Loading color={'#fff'} size={20} /> : 'Sim, confirmar'
          }
          color={'#fff'}
          width={'45%'}
          height={'2.5rem'}
          weight={600}
          onClick={onClickAction}
        />
        <Button
          background={'#EA5455'}
          title={'Não, sair'}
          color={'#fff'}
          width={'45%'}
          height={'2.5rem'}
          weight={600}
          onClick={onClickCloseModal}
        />
      </div>
    </ContentModalContainer>
  )
}

export { ContentConfirmActionModal }
