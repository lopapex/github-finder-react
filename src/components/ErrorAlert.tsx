import { FC, Dispatch, SetStateAction } from 'react';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

type props = {
  error: string
  setError: Dispatch<SetStateAction<string>>
}

const ErrorAlert: FC<props> = ({ error, setError }) => {
  return (
    <Collapse in={error.length > 0}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setError('')
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {error}
      </Alert>
    </Collapse>
  )
}

export default ErrorAlert
