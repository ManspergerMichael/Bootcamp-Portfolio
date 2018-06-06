namespace Phone{
    public class Nokia : Phone, IRingable 
    {
    public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
        : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return "... Ringgg ring ringgg ...";
        }
        public string Unlock() 
        {
            return "Nokia " + versionNumber + "unlocked with fingerprint";
        }
        public override void DisplayInfo() 
        {
            return "##############\nNokia"+versionNumber+            
        }
    }

}