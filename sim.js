class SimAnneal {
    initialTemperature = 250;
    temperature = 0;
    alpha = 0.95;
    current_solution = null;
    rand_neighbour = null;
    
    setupSim(points) {
        this.current_solution = random(points);
        this.temperature = this.initialTemperature;
    }

    runSim(points){
        var neighbours = [points[points.indexOf(this.current_solution)+1],points[points.indexOf(this.current_solution)-1]];
        if(neighbours[0] == null){
            this.rand_neighbour = neighbours[1];
        } else if(neighbours[1] == null){
            this.rand_neighbour = neighbours[0];
        } else {
            this.rand_neighbour = random(neighbours);
        }
        
        

        if(this.rand_neighbour.getY() <= this.current_solution.getY()){
            if(Math.random() < this.generateProbability(this.rand_neighbour.getY(),this.current_solution.getY())){
                this.current_solution = this.rand_neighbour;
            }
        } else {
            this.current_solution = this.rand_neighbour;
        }

        this.scheduleTemp();
        console.log("Temperature: "+this.temperature);
        return this.current_solution;
        
        
    }

    generateProbability(qualityRand, qualityCurrent){
        var deltaE = qualityRand - qualityCurrent;
        var probability = exp(deltaE/this.temperature);
        console.log(probability);
        return probability;
    }

    scheduleTemp(){
        this.temperature = this.temperature * this.alpha;
    }

    getTemp(){
        return this.temperature;
    }

}
