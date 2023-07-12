import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons(props) {
    const nomeBotao = props.nomebotao

    return (
      <Stack spacing={2} direction="row">
        <Button variant="contained" href="javascript:window.history.go(-1)">
          {nomeBotao}
        </Button>
      </Stack>
    );
  }
