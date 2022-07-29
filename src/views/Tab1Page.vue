<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align: center; padding-top: 5%;">
          <img :src="'https://appdesarrollo.co/proyectos/truekeApp/attachments/site_logo/logo2.png'" width="200">
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab *1*</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list-header lines="full">
<!--      <ion-list>-->
<!--        <ion-item>-->
<!--          <ion-avatar slot="start">-->
<!--            <img :src="'https://appdesarrollo.co/proyectos/truekeApp/attachments/shop_images/'+ item.product_image" height="100" width="120">-->
<!--          </ion-avatar>-->
<!--        <div></div>-->
<!--          <ion-label color="dark" style="padding-left: 1%; color: #fff;">-->
<!--            <a :href="'https://appdesarrollo.co/proyectos/truekeApp/'+item.product_url" target="_blank" style="color: #fff;">-->
<!--              <h3><b>{{item.title}}</b></h3>-->
<!--            </a>-->
<!--            <h4>{{item.vendor_name}}</h4>-->
<!--            <h4>$ {{item.price}}</h4>-->
<!--          </ion-label>-->
<!--          <a :href="'https://appdesarrollo.co/proyectos/truekeApp/'+item.product_url" target="_blank">-->
<!--            <ion-button fill="outline" style="color: #fff;">Pedir Trueke</ion-button>-->
<!--          </a>-->
<!--        </ion-item>-->
<!--      </ion-list>-->
      </ion-list-header>

      <div style="overflow: hidden;width: 100%;color: red;" v-for="item in dataApi" :key="item.product_id" :item="item">
        <div style="float: left; padding-left: 2%;width: 20%;">
          <ion-avatar slot="start">
            <img :src="'https://appdesarrollo.co/proyectos/truekeApp/attachments/shop_images/'+ item.product_image" width="30%">
          </ion-avatar>
        </div>
        <div style="float: left;padding-left: 2%;width: 40%;">
          <ion-label color="dark" style="padding-left: 1%; color: #fff;">
            <a :href="'https://appdesarrollo.co/proyectos/truekeApp/'+item.product_url" target="_blank" style="color: #fff;">
              <h3><b>{{item.title}}</b></h3>
            </a>
            <h4>{{item.vendor_name}}</h4>
            <h4>$ {{item.price}}</h4>
          </ion-label>
        </div>
        <div style="float: left;width: 40%;">
          <a :href="'https://appdesarrollo.co/proyectos/truekeApp/'+item.product_url" target="_blank" >
            <ion-button><span style="background-color: #fff;border: none;color: #3bafda;padding: 15px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;">Pedir Trueke</span></ion-button>
          </a>
        </div>
      </div>
<!--      <div v-for="item in dataApi" :key="item.product_id" :item="item">-->
<!--        <ion-item>-->
<!--          <ion-avatar>-->
<!--            <img :src="'https://appdesarrollo.co/proyectos/truekeApp/attachments/shop_images/'+ item.product_image" height="100" width="120">-->
<!--          </ion-avatar>-->
<!--          <ion-label style="padding-left: 3%;">-->
<!--            <h2><b>{{item.title}}</b></h2>-->
<!--            <h4>{{item.vendor_name}}</h4>-->
<!--            <h4>$ {{item.price}}</h4>-->
<!--          </ion-label>-->
<!--          <a :href="'https://appdesarrollo.co/proyectos/truekeApp/'+item.product_url" target="_blank">-->
<!--            <ion-button fill="outline">Pedir Trueke</ion-button>-->
<!--          </a>-->
<!--        </ion-item>-->
<!--      </div>-->

      <ExploreContainer name="Tab 1 page" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {personCircleOutline} from "ionicons/icons";
import {User} from "@/interfaces/Users";
import {getUsers} from "@/services/UserServices";


export default  defineComponent({
  name: 'Tab1Page',
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    }
  },
  // components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonItem,IonLabel,IonList },
  // components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,},
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,},
    setup(){
    const dataApi = ref<User[]>([]);
    const getData = async () => {
      try {
        const response = await getUsers();
        dataApi.value = response;
      }catch (e){
        console.log(e)
      }
    }
      const doRefresh = (event: CustomEvent) => {
        console.log('Begin async operation');

        setTimeout(() => {
          console.log('Async operation has ended');
          // event.target.complete();
        }, 20);
      }
    onMounted(() => {
      getData();
    })
    return{
      dataApi,
      personCircleOutline
    }
  }
});
</script>

<style scoped>
ion-select::part(text) {
  color: brown;
}
/*Attempt 1*/
ion-content {
  --background:#3bafda;
  --color:  #fff;
}
/*Attempt 2*/
ion-content {
  --ion-background-color:#000000;
}
/*Attempt 3*/
ion-content.customStyles {
  --background:#000000;
  background: #000000;
}
/*Attempt 4*/
:host {
  background: #000000;
}
/*Attempt 5*/
@media (prefers-color-scheme: light) {

  ion-content {
    --ion-background-color: transparent;
    --ion-background-color-rgb: 0, 0, 0;
  }
}
</style>
