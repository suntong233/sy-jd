<template>
  <div v-fun class="boxContainer">
    <div @click="routerTo('/classify')" class="boxContainer-left"></div>
    <div class="boxContainer-center">
      <div class="jdicon"></div>
      <div class="jdicon2">|</div>
      <div class="jdfdj"></div>
      <input @click="handleChangeColor" class="boxContainerinput" :placeholder="placeholder" />
    </div>
    <div @click="routerTo('/login')" class="boxContainer-right"></div>
  </div>
</template>

<script>

export default {
  name: "homeHeader",
  data() {
    return {
      placeholder: "storge的数据决定"
    };
  },
  methods: {
      handleChangeColor() {
          this.$router.push("/search");
      },
      routerTo(path){
          this.$router.push(path);
      }
  },
  directives: {
    fun: {
      inserted: function (el) {
        window.addEventListener("scroll",()=>{
          funn(document.documentElement.scrollTop)
        });
        funn(document.documentElement.scrollTop)
        function funn(n){
          if(n!==0){
            el.style.background = "rgb(228,49,48)"
          }else{
            el.style.background = "rgb(90,0,10)"
          }
        }
      }
  }
}
};
</script>

<style scoped>
.boxContainer {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  z-index: 1000;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.boxContainer-center {
    overflow: hidden;
  position: relative;
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 5px;
}
.boxContainer-left {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAHlJREFUWAnt2LEJwDAMRFE5c2ShLOKhsp69h3ISeAI1CnyBiJvA8dwcHu7+mNmrvbWdZivMHAq4dOgW7kDt65y6fiPg1AZnt8kr7haKPAgggAACfxOIskCbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=)
    no-repeat;
}
.boxContainer-right {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAYAAAAXb/p7AAAAAXNSR0IArs4c6QAABBVJREFUWAnNmEtIVGEUx2d8EFZkGkWZYEhQQpEkFUUktTBb9BARArEW0SKiKNpUUNGixyJb2KIMpMemRQVJQiSFSfagsCKCyrTIitCkh2Ev0+l3Yj7ndOfOnTt3ptEDf7//d75z/ueMc+/33Tt+X4IsEAjMQmohyAavQLPf7+9iHD6jqQywETwBVhvAUQ+WDkuHFN4EeoAbe0RQUVIapVAmOG/TVR++C6AatNis/8S39b82SYFR4JaleBvzbWC8Ls58JqgBvUDbLh2XUE6VM7oS/ChIdyrCeh64DYwNQtY45XhaQ3SlqRAcN7sVIj4NXFX5H+Fj3ea7ikNQ/xdqXSWpIPLl2m0Hxnao5fgoiouMKuM3MNGLInnrlM47uN+LTlgOQruV8MmwAJcONNLBe6U1I1pqSrSA4Lrew5pd5oSFcbL047yjFrSucoeo2wYLQym+h4p7oQ9U0hzFbanbBuWTGwsY4nH8oPIyFLelbhvsVdmTFY+XRt1qojbIBb2WLuapTsYp7oXqb6MK/blOIlEbJLlMCXTC9UWullzT60Sax7A0eKlTppsGpyqBg9yJ3WoeMyX/NUk1KnGK4rFTvoKdat96Bo9rcyU/FYiOscrYu1IZqOSA30aNcZVajpmSL08+xj5Dot7JUYsgop9i7jJPjZpkE0BeLvgKjO21CYvdhdo0IA+cxg7HqkKiHHM3jQBjBxgdq07EeMT2K3Gh5RGDbRaIr1P5cskstgnz7kJQnunuqyLyVRW4USTukMoTmrhHLd0AwvJV66eRt8xzdIyVsy6P/drqrDEJnVOpEHxRFY9HKkBMuYoTegl4usEi1bD1U6QYyLuFmNw8E+wC8d+QgKCdY5STIzlGsaemMqPteYr/jYqRXx6SYxSdD/qDxeU/OcmuMv6mYIwMZ4Gbo9VOyp2PAnInVwJ9DV6OlE1cGdB2jcnsSPGe/YjmgQNA38FMA10gz0mY9WMSaLF7zDeA+DZqBJaABjAArPYSh6vrirg9wFwSWkfOYnn5z3X6kGFrJCwALcDO5HVRNt5/fuoIE7E4iC8Ccid/B1b7heMEcH6dJSAFHAFmC4H+NZlfAatBXPsY+dlgO3gOrPYJxwrLZwtNWdTnpST/ALVgeigqMQxNPygFzUCbnNMlYVVwbtFRcNn1HW+AMBGPDuqUgA5grBsSejljkg/0tXHKYy3PadTPAnK2Gzs9JIbnovEytoJRQ4tJJNRdpvqQnaPAxx/9SC9O22MrWX1Svx4Y2ycNVpkZY2OyGolUhx706dMkZ2PoYvT52iMlJtFv3pmlZKY8/rSp4hV8gh7mg8qXbFqsCr6QvWgMjscgXy2MFLo8hTf9PrqpAJ0jpatgH9X01jj0KwH/STlb14OsYW40QP1WmmuQPv4Aw5SBsf0I1dAAAAAASUVORK5CYII=)
    no-repeat;
}
.boxContainer-left,
.boxContainer-right {
  height: 100%;
  width: 42px;
  background-position: center;
  background-size: 22px;
}
.boxContainerinput {
  appearance: none;
  outline: none;
  background: rgb(252, 252, 252);
  border: none;
  width: 100%;
  border-radius: 20px;
  color: rgb(165, 164, 164);
  padding-left: 68px;
  height: 30px;
}
.jdfdj {
  position: absolute;
  display: block;
  width: 18px;
  left: 43px;
  height: 15px;
  z-index: 10;
  background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline) no-repeat;
  background-position: -80px 0px;
  background-size: 200px;
}
.jdicon2{
    position: absolute;
    font-weight: 10;
    font-size: 13px;
    left: 38px;
    top: 26%;
    color: rgb(172, 172, 172);
}
.jdicon {
  position: absolute;
  width: 20px;
  left: 13px;
  height: 20px;
  z-index: 10;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAA/tJREFUWAnNmF9oU1ccx8/v5iZXov2nTVOloowJDjfYk4w1SW2xVdDik08iYw8Dqw9j4tsYFMZe3HAMBg593B5mVQSLD0abalL/FcUHNwTFvsjU/HFNW21N0tzfvifNiTf3pqajtc2B8Pv9vvec3/3c8+fec0KiSkm0hyIsuNNazaD6tY0jl8alFm8P/SEEH7Belz5BhJkSRBNw0gjjJOgesxh1Gfqd5kjkH3ubSrFeSVwKDVBgFPWCuR52I36f4EF3ytz5TE4kAsFrgumkb9vWC3TqVE7qlYpWSVwODT25A8BnEn8/fJwKhbrmu+eKAVqANpl5vhpvD57g/ftdFr3gvpchdmmugxjiWZPZTWw2YKybTKKtxGI7eu1DO0RxOnyTev5iFa4dtl5/L4DrWn0DdPZs1noj5SdCoS2c5z4i+oqZ1yhdWpNFHxbdmP9G9CelL/sQt0Sjj/03YkfZo3+KZXRHgby1/MN4V9cmFS87oLqxPxJ50rK+tROvnrtKK1pPLjv7ndJWDFACYBrMkNfYh+F+pYCK9otkd/cG6a8ooATwXbnyjEj8Jn1VMDd1nsnukvGKA0oIN3tOSmstLMxuGdcEYOPI1TEM81MrIDGFagZwDozLVzSJVu7v12qiB+cAKWHtQcxD11Qs1lRDgKKwO7JCZvN5Xy0BOr5qJj6XtQPItM7ae9J3C5GqHUAy26yAWNWzjcPDEwsBdGyBrImWwi9ss1h8bs2FHc5TQHJVQCbhsTaUfoM3V3GnYq+30DjxIvUZgOTOu1SwRRuWQVVA1PGXWkmH6A2Fw6/LtMUGPHvMngKAQ1J7JyD39nqJeXNZY+Z4WbzIIBns7MBGdp8tzbRhuC9L7Z2AyX8n9qLr5eGnVPBhv1UKFumkAzs/MDl/zn4PjcSv9UNDL2X6eQFlYxwVf3YyaGGn9v+VZKCjNyMyt3Hqa7a2Rm9MGobnuNIcL8epnp6Wmek3X2Y58y2erE5VnLMU93mNgXJt4VE6sKcpJ17txk7liMlmu70lVm2eNHFQ9Z68rieDoR9NU6zHim7DUbsNcJvld9DeWMaaxv0LWSDJ5/Hj8UAwj7nlxqJqwBGzEVPjowxPbqmUV2mof8QXjV5UsbS6aXJhBSHJXCk5xVgZEqd9sVjZxlJdsls84NdSK6Qs5psvbaEtUUoQH/LFouftueadg6oi5kQOXfc9zg99SlsqK78W6Nk/Vxvuj/2xmANO3scxB9XNASb/VxnQNfHL2uj1B0pfEktiDC+H3zWPfrrafzQ6IG5jMPDipUlAjeOp/sJ/Jvebm+pGaXBwuhqQptEjDN9NZ73CoE5BTzNTGi+ruCa0u6u8ntG6cLhs7+ds+1b5D7N0Tl8rtx1wAAAAAElFTkSuQmCC)
    no-repeat;
    background-position-y: 3px; 
  background-size: 20px;
}
</style>