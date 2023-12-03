import { FC } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Storage } from 'aws-amplify'

const CreateProduct: FC = (): ReactNode => {
  return <div>CreateProduct</div>
}

export default withAuthenticator(CreateProduct)
