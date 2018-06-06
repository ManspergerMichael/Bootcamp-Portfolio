namespace Phone{
    public abstract class Phone {
        private string _versionNumber{
            get{return _versionNumber;}
            set{_versionNumber = value;}
            }
        private int _batteryPercentage{get;set;}
        private string _carrier{get;set;}
        private string _ringTone{get;set;}
        public Phone(string versionNumber, int batteryPercentage, string carrier, string ringTone){
            _versionNumber = versionNumber;
            _batteryPercentage = batteryPercentage;
            _carrier = carrier;
            _ringTone = ringTone;
        }
        // abstract method. This method will be implemented by the subclasses
        public abstract void DisplayInfo();
        // public getters and setters removed for brevity. Please implement them yourself
    }
}