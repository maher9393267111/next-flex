import React from 'react'
import styles from '../styles/flex.module.css'
export default function flex() {
    return (
        <div className={styles.container}>
<div className={styles.flexcontainer}>

{/* header section */}
<div className={styles.header}>
<div className={styles.logo}>
<div>
logo

</div>


</div>
<div className={styles.nav}>

  <div>
  nav
      </div>

</div>

</div>



{/* main section */}
<div className={styles.main}>

  {/* sidebar  */}
<div className={styles.sidebar}>


<div className={styles.side1}>
<div>

one
</div>


    </div>
<div className={styles.side1}>
<div>

two
</div>
    </div>
<div className={styles.side1}>

<div>

three
</div>
    </div>
</div>

  {/* middle section  */}
<div className={styles.middle}>
<div className={styles.up}>ortada</div>
<div className={styles.footer}>footer</div>

</div>


</div>


</div>







        </div>
    )
}
