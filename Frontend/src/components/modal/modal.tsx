import Modal from 'react-modal'
import { HeaderTitle } from './style'

import { RiCloseLine } from 'react-icons/ri'
import { Button } from '../form/button'
import { IModalPropsComponent } from '../../utils/interfaces/components/modal'

const ModalComponent = ({
  children,
  isOpen,
  onRequestClose,
  title,
}: IModalPropsComponent) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal"
    >
      <div className="react-modal-content">
        <HeaderTitle>
          <span>{title}</span>
          <Button
            background={'transparent'}
            title={<RiCloseLine size="20px" />}
            color={'#5E5873'}
            width={'auto'}
            height={'auto'}
            weight={0}
            onClick={onRequestClose}
          />
        </HeaderTitle>

        <div>{children}</div>
      </div>
    </Modal>
  )
}

export { ModalComponent }
