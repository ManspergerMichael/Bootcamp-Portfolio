namespace Phone{
    public class Nokia : Phone, IRingable 
    {
        //public string versionNumber;
    public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
        : base(versionNumber, batteryPercentage, carrier, ringTone) {
            //public string versionNumber;
        }
        public string Ring() 
        {
            return _ringTone;
        }
        public string Unlock() 
        {
            return "Nokia " + _versionNumber + "unlocked with fingerprint";
        }
        public override void DisplayInfo() 
        {
            System.Console.WriteLine("$$$$$$$$$\nNokia: "+_versionNumber+
            "\nBattery Percentage: "+_batteryPercentage+
            "\nCarrier: "+_carrier+
            "\nRing Tone: "+_ringTone+
            "\n$$$$$$$$");         
        }
    }

}