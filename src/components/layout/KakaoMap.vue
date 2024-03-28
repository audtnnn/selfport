<template>
    <div class="map">
        <div id="map" ref="mapRef" style="width:100%; height:100%; overflow:hidden;"></div>
    </div>
</template>

<script>
    export default {
        props: {
            hotel : []
        },
        data() {
            return {
                markers: [],
                map: null,
                places : [],
                mapOption : {
                    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                    level: 8 // 지도의 확대 레벨
                },  
                pagination : {},
                infowindow : null,
            };
        },
    mounted(){
        let mapContainer = this.$refs.mapRef;
        let historyItems = this.$store.getters.getHistory;
        if (historyItems.length > 0) {
        let lastHistoryItem = historyItems[historyItems.length - 1]; // 가장 최근에 추가된 항목을 가져옴
        this.mapOption.center = new kakao.maps.LatLng(lastHistoryItem.Lat, lastHistoryItem.Lng);
        }
        this.map = new kakao.maps.Map(mapContainer, this.mapOption);
        this.infowindow = new kakao.maps.InfoWindow({zIndex:1});
        this.searchPlaces()
        console.log(this.markers)
        },
    methods: {
        searchPlaces() {
            // 마커를 생성하고 지도에 표시
            this.hotel.forEach(hotel => {
                const marker = new kakao.maps.Marker({
                    map: this.map,
                    position: hotel.latlng
                });
                let isOpen = false;

                // 마커를 클릭했을 때 인포윈도우 표시
                kakao.maps.event.addListener(marker, 'click', () => {
                     if (isOpen) {
                        this.infowindow.close();
                        isOpen = false;
                    } else {
                    const content = `
                        <div style="display:flex; width: 324px; height: 173px; padding: 14px;">
                            <div style="width: 116px; height: 145px; margin-right: 10px;">
                                <img src="${hotel.img}" alt="호텔 이미지" style="border-radius: 10px; width: 116px; height: 145px;">
                            </div>
                            <div class="content" style="letter-spacing: 1px;">
                                <div>
                                <h2 style="font-size: 0.75rem; color: rgb(112,112,112); margin-bottom: 2px"; letter-spacing: 0.2px;>${hotel.name}</h2>
                                </div>
                                <div>
                                <p style="font-size: 0.75rem; font-weight: 600;  margin-bottom: 2px; letter-spacing: 0.2px;">${hotel.detail}</p>
                                </div>
                                <div style="display: flex;  align-items: center; gap: 2px;">
                                    <div style=" display: flex; align-items: center; background: rgb(255,173,10); color: rgb(51,51,51); border-radius: 4px; padding: 3px">
                                        <span style="font-size:10px"><i class="fa-solid fa-star"></i></span>
                                        <span style="font-size:12px; font-weight: 600";letter-spacing: 0.2px; >${hotel.star}</span>
                                    </div>
                                        <span style="font-size: 12px; color: rgb(112,112,112); letter-spacing: 0.2px; font-weight: 600;">${hotel.evalue}</span>
                                </div>
                            </div>
                        </div>
                    `;
                    this.infowindow.setContent(content);
                    this.infowindow.open(this.map, marker);
                    isOpen = true;
                    }
                })

                // 마커를 markers 배열에 추가
                this.markers.push(marker);
            });
        }
        }        
    }
</script>

<style lang="scss" scoped>
.map{
    width: 1100px;
    height: 800px;
    #map {
        height: 100%;
        width: 100%;
    }
}
</style>