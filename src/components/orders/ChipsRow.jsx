import * as React from 'react';
import Chip from '@mui/material/Chip';


export default function ChipsRow() {

  const slider = document.querySelector('.order-page-chips');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  const arrOfChip = [
    {
      label: 'Semua Pesanan',
      value: 'all'
    },
    {
      label: 'Belum Dibayar',
      value: 'unpaid'
    },
    {
      label: 'Diproses',
      value: 'on_process'
    },
    {
      label: 'Dikirim',
      value: 'on_delivery'
    },
    {
      label: 'Selesai',
      value: 'finished'
    },
    {
      label: 'Gagal',
      value: 'done'
    }
  ]
  return (
    <div style={{ display: 'flex', overflow: 'auto', paddingLeft: 10, paddingRight: 10, cursor: 'grabbing' }} className="order-page-chips" >
      {arrOfChip.map(({label, value}) => (
        <Chip
          label={label}
          component="a"
          href={"/orders?type=" + value}
          variant="outlined"
          clickable
          sx={{ margin: 0.5, marginLeft: 1.5, fontWeight: 'bold', color: 'rgb(21, 101, 192)'}}
          key={value}
        />
      ))}
      
    </div>
  );
}