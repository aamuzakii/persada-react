import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import {Box, Select} from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import BasicStack from './BasicStack'
import CustomSelect from './CustomSelect'
import { useDispatch } from 'react-redux' 
import  {fetchAllProducts}  from '../store/actions/company'

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  // backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
  backgroundColor: 'white'
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableBottomDrawer(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])


  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <CustomSelect clickHandler={toggleDrawer(true)} ></CustomSelect>
          <div style={{backgroundColor: 'rgb(234, 232, 244)', borderRadius: 4, fontSize: 12, fontWeight: 500, padding: 5, paddingLeft: 10, paddingRight: 10}} >Semua produk</div>
        </div>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            // top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 3,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <BasicStack></BasicStack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableBottomDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableBottomDrawer;
