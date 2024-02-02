const building = {
    floors: "2 story",
    material : "Brick",
    type : "Villa",
    wholeBuiding : function() {
      return this.floors + " " + this.material + " " + this.type;
    }
  };

  Building = building.wholeBuilding();
  System.out.println(building);
  //alert(wholeBuilding);